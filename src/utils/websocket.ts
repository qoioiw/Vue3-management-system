// WebSocketClient.ts

let socket: WebSocket | null = null
let socketConnecting = false
let heartbeatTimer: NodeJS.Timeout | null = null
let reconnectTimer: NodeJS.Timeout | null = null
let reconnectAttempts = 0
const maxReconnectAttempts = 999 // 最大重连尝试次数
const reconnectInterval = 5000 // 重连间隔时间（毫秒）
// 心跳间隔时间（毫秒）
const heartbeatInterval = 30000

// 启动WebSocket连接
const createSocket = () => {
  let socketInstance = new WebSocket('ws://localhost:3000')
  // 建立连接
  socketInstance.onopen = () => {
    socket = socketInstance
    socketConnecting = true
    console.log('连接建立')

    // 清除重连计数器和定时器
    reconnectAttempts = 0
    clearTimeout(reconnectTimer)

    // 启动心跳
    startHeartbeat()
  }

  // 客户端接收服务端返回的数据
  socketInstance.onmessage = (event: MessageEvent) => {
    console.log('服务器返回的数据为: ' + event.data)

    // 收到消息后重置心跳
    resetHeartbeat()
  }

  socketInstance.onclose = (event: CloseEvent) => {
    console.log('连接关闭', event.wasClean)

    // 关闭连接时清除心跳定时器
    stopHeartbeat()

    // 检查是否为异常关闭
    if (!event.wasClean) {
      console.log('连接异常关闭，尝试重新连接...')
      reconnect()
    }
  }

  // 发生错误时
  socketInstance.onerror = (event: any) => {
    console.error('WebSocket连接发生错误:', event)
  }
}

// 发送消息
const sendMsg = (message: string) => {
  if (socket && socketConnecting) {
    socket.send(message)
  } else {
    console.error('WebSocket连接未建立')
  }
}

// 关闭WebSocket连接
const closeSocket = () => {
  if (socketConnecting) {
    socket?.close()
    stopHeartbeat()
    clearTimeout(reconnectTimer)
    console.log('关闭连接')
  } else {
    clearTimeout(reconnectTimer)
    console.log('WebSocket连接未建立,不用关闭')
  }
}

// 启动心跳定时器
const startHeartbeat = () => {
  if (heartbeatTimer) return

  heartbeatTimer = setInterval(() => {
    console.log('发送心跳')
    sendMsg('ping')
  }, heartbeatInterval)
}

// 重置心跳定时器
const resetHeartbeat = () => {
  stopHeartbeat()
  startHeartbeat()
}

// 停止心跳定时器
const stopHeartbeat = () => {
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer)
    heartbeatTimer = null
  }
}

// 重连函数
const reconnect = () => {
  //
  console.log('触发重连事件')
  if (reconnectAttempts < maxReconnectAttempts) {
    reconnectTimer = setTimeout(() => {
      console.log('尝试重新连接...')
      reconnectAttempts++
      createSocket() // 重新尝试连接
    }, reconnectInterval)
  } else {
    console.error('达到最大重连次数，停止重连')
  }
}

export { createSocket, sendMsg, closeSocket }
