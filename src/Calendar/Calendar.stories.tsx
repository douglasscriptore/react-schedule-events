import Calendar from './Calendar'

export default {
  component: Calendar,
  title: 'Calendar',
  excludeStories: /.*Data$/,
}

export const Simple = () => <Calendar hideNavigation />

export const WithMode = () => (
  <>
    <Calendar />
  </>
)
