export const CategoryColorFilter = (category: string) => {
  const colors: string[] = ['#e74c3c', '#f1c40f', '#1abc9c', '#3498db'];
  let color: string = '#34495e';
  switch (category) {
    case 'Tech':
      color = colors[0];
      break;
    case 'Life':
      color = colors[1];
      break;
    case 'Asobi':
      color = colors[3];
      break;
    // case 'Others':
    //   color = colors[3];
    //   break;
    default:
      break;
  }
  return color;
};
