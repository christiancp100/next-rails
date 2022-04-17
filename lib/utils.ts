import moment from 'moment'

export const formatDuration = (duration: string) => {
  return moment.utc(moment.duration(duration.slice(3)).as('milliseconds')).format('HH[hr] mm[min]').replace(/^(?:00:)?0?/, '');;
}