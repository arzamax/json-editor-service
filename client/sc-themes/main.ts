export default {
  buttonsColor: '#00AEEA',
  inactiveColor: '#999999',
  linkColor: '#00AEEA',
  mainColor: '#33516C',
  mainFont: 'Arial, sans-serif',
  transition: (target: string[]): string => target.reduce((acc, item, index) => {
    acc += `${item} ease-out 0.3s${index !== target.length - 1 ? ', ' : ''}`;

    return acc;
  }, ''),
};
