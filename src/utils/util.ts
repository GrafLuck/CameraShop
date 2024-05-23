import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export function humanizeDate(date: string) {
  return dayjs(date).locale('ru').format('DD MMMM');
}

export function formatDate(date: string) {
  return dayjs(date).format('YYYY-MM-DD');
}
