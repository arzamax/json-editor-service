export default {
  handlersColor: '#00AEEA',
  inactiveColor: '#999999',
  mainColor: '#33516C',
  mainFont: 'Arial, sans-serif',
  transition: (target: string[]): string => target.reduce((acc, item, index) => {
    acc += `${item} ease-out 0.3s${index !== target.length - 1 ? ', ' : ''}`;

    return acc;
  }, ''),
};
