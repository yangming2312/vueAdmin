// 错误日志的store
const errorLog = {
  state: {
    errLogs: []
  },
  pushLog(log) {
    this.state.errLogs.unshift(log);
  },
  clearLog() {
    this.state.errLogs = [];
  }
};

export default errorLog;
