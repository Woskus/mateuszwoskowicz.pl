import {useLocale} from 'next-intl';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pl';
import 'dayjs/locale/en';

dayjs.extend(relativeTime);

export function LocalizedRelativeTime({startDate, endDate}: {startDate: Date, endDate?: Date}) {
  const locale = useLocale();

  return (
    <>
      {dayjs(startDate, {locale}).to(
        endDate ? endDate : dayjs(),
        true,
      )}
    </>
  );
}
