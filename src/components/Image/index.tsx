type Props = {
  imgUrl: string
}
export const Image = ({ imgUrl }: Props) => {
  return <img src={imgUrl} alt="" />
}
