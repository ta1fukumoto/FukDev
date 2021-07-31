import { format, parseISO } from "date-fns"

type Props = {
  dateString: string
}

const Date: React.VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className="text-sm md:text-base text-gray-500 tracking-wide">
      {format(date, "yyyy/MM/dd")}
    </time>
  )
}

export default Date
