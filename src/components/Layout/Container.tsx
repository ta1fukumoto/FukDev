type Props = {
  maxWidth?: string
  children: React.ReactNode
}

const Container: React.VFC<Props> = ({ maxWidth = "max-w-6xl", children }) => {
  return <div className={`${maxWidth} mx-auto mb-20 px-5`}>{children}</div>
}

export default Container
