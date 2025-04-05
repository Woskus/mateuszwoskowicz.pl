import {useLocale} from 'next-intl';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
import 'dayjs/locale/en';

export function LocalizedDate({date}: {date: Date}) {
  const locale = useLocale();

  return (
    <>
      {dayjs(date, {locale}).format('MMMM YYYY')}
    </>
  );
}
