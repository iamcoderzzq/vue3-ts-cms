import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const DEFAULT_TEMPLATE = 'YYYY-MM-DD HH:mm:ss'
export function formatUTC(utcStr: string, template: string = DEFAULT_TEMPLATE) {
  return dayjs.utc(utcStr).utcOffset(8).format(template)
}
