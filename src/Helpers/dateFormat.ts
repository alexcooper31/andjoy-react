export default (time: number) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const date = new Date(time * 1000);
  const suffix = () => {
    switch(date.getUTCDate() % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  return {
    day: date.getUTCDate(),
    month: monthNames[date.getUTCMonth()],
    year: date.getFullYear(),
    suffix: suffix()
  };
}