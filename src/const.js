export const UI_CONFIG = {
    subTaskItemHight: 20, // 每个子任务高度
    subTaskItemMarginTop: 4, // 每个子任务头部空白距离
};

export const STATE_MAP = {
    waiting: {
        bgColor: "#C6D57E",
        value: '等待'
    },
    primary: {
        bgColor: '#A2D2FF',
        value: '正常'
    },
    success: {
        bgColor: '#61B15A',
        value: '成功'
    },
    warning: {
        bgColor: '#FFC93C',
        value: '警告'
    },
    error: {
        bgColor: '#FA1E0E',
        value: '异常'
    },
    closed: {
        bgColor: '#DDDDDD',
        value: '关闭'
    },
    subTask: {
        bgColor: '#7868e6',
        value: '子任务'
    },
};

export const WEEK_MAP = {
    1: "周一",
    2: "周二",
    3: "周三",
    4: "周四",
    5: "周五",
    6: "周六",
    0: "周日",
}