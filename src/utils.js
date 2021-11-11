/**
 * 获取当前月一共多少天
 */

export const getMonthDays = (year, month) => new Date(year, month, 0).getDate();

/**
 * 对数据排序，startTime从小到大
 */


export const sortData = (list) => list.sort((a, b) => a.startTime - b.startTime);

/**
 * 对数据进行同轨道整合
 */


export const formatTrack = (list, day) => {
    const res = [];
    list.forEach(item => {
        item.__left = (item.startTime - day.currentMonthFirstDay) / 86400000;
        item.__width = (item.endTime - item.startTime) / 86400000;
        //  开始时间边界处理，加标识 relativeCurrentMonth=prv：开始时间早于当月月初
        if (day.currentMonthFirstDay > item.startTime) {
            item.relativeCurrentMonth = "prv";
            item.__left = 0;
            item.__width = (item.endTime - day.currentMonthFirstDay) / 86400000;
        }
        //  结束时间边界处理，加标识 relativeCurrentMonth=next：结束时间晚于当月月未
        if (day.currentMonthLastDay < item.endTime) {
            item.relativeCurrentMonth = "next";
            item.__width = (day.currentMonthLastDay - item.startTime) / 86400000;
        };
        addTrack(0, item);
    });
    function addTrack(index, item) {
        const track = res[index];
        const length = track?.length;
        if (length) {
            const _last = track[length - 1];
            if (_last.endTime <= item.startTime) {
                item.__left = (item.startTime - _last.endTime) / 86400000;
                track.push(item);
            } else {
                addTrack(index + 1, item);
            };
        } else {
            res.push([item])
        };
    };
    return res;
};