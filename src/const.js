export const STATE_MAP = {
    waiting: {
        bgColor: '#C6D57E',// 该状态在视图显示的背景色
        label: '等待'       // 该状态对应的 label
    },
    primary: {
        bgColor: '#A2D2FF',
        label: '正常'
    },
    success: {
        bgColor: '#61B15A',
        label: '成功'
    },
    warning: {
        bgColor: '#FFC93C',
        label: '警告'
    },
    error: {
        bgColor: '#FA1E0E',
        label: '异常'
    },
    closed: {
        bgColor: '#DDDDDD',
        label: '关闭'
    },
    subTask: {
        bgColor: '#7868e6',
        label: '子任务'
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