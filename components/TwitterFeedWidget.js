export default class extends React.PureComponent {
  render() {
    const { children, height, href } = this.props
    return (
      <div>
        <a className="twitter-timeline" data-dnt="true" data-height={height} href={href}>
          {children}
        </a>
        <script async src="//platform.twitter.com/widgets.js" charset="utf-8" />
      </div>
    )
  }
}
