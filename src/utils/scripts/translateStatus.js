export function translateStatus(status) {
  status = status.toLowerCase();

  switch (status) {
    case 'processing':
      status = 'processando';
      break;
    case 'done':
      status = 'completado';
      break;
    case 'canceled':
      status = 'cancelado';
      break;
  }

  return status;
}
