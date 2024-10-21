// dailySummary.js
const dailySummary = {};

const updateDailySummary = (data) => {
    const date = new Date(data.timestamp * 1000).toISOString().split('T')[0]; // Get the date in YYYY-MM-DD format
    const city = data.city;

    if (!dailySummary[date]) {
        dailySummary[date] = {};
    }

    if (!dailySummary[date][city]) {
        dailySummary[date][city] = {
            totalTemp: 0,
            maxTemp: Number.MIN_VALUE,
            minTemp: Number.MAX_VALUE,
            count: 0,
            conditionCount: {}
        };
    }

    const summary = dailySummary[date][city];
    summary.totalTemp += data.temp;
    summary.count += 1;
    summary.maxTemp = Math.max(summary.maxTemp, data.temp);
    summary.minTemp = Math.min(summary.minTemp, data.temp);
    summary.conditionCount[data.condition] = (summary.conditionCount[data.condition] || 0) + 1;
};

const calculateDailySummary = (date) => {
    const summary = dailySummary[date];
    if (summary) {
        for (const city in summary) {
            const data = summary[city];
            const avgTemp = data.totalTemp / data.count;
            const dominantCondition = Object.keys(data.conditionCount).reduce((a, b) => data.conditionCount[a] > data.conditionCount[b] ? a : b);
            console.log(`Daily Summary for ${city} on ${date}:`);
            console.log(`Average Temp: ${avgTemp.toFixed(2)}°C, Max Temp: ${data.maxTemp}°C, Min Temp: ${data.minTemp}°C, Dominant Condition: ${dominantCondition}`);
        }
    }
};

module.exports = { updateDailySummary, calculateDailySummary };
