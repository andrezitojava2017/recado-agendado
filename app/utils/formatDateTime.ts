export const formatDate = (date: string | undefined) => {
  const milliseconds = parseInt(date!);
  const rs = new Date(milliseconds);
  return rs.toLocaleDateString('pt-br');
};

export const formatTime = (time: string | undefined) => {
  const milliseconds = parseInt(time!);
  const rs = new Date(milliseconds);

  return rs.toLocaleTimeString('pt-br');
};
