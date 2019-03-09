export default {
  defaultBoxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  errorColor: '#C62828',
  handlersColor: '#00AEEA',
  inactiveColor: '#999999',
  mainColor: '#33516C',
  mainFont: 'Arial, sans-serif',
  transition: (target: string[]): string => target.reduce((acc, item, index) => {
    acc += `${item} ease-out 0.3s${index !== target.length - 1 ? ', ' : ''}`;

    return acc;
  }, ''),
};
