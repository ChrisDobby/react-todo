export default item => !item.complete && item.timestampDue < new Date().getTime();
