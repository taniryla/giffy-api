
import GifCardPage from './GifCardPage'
export default function GifListPage({getGiphy}){
  const gif = getGiphy.map((item, idx) => (
      <GifCardPage item={item} key={idx} />
  ));
  return (
    <>
      <h1>Gif List Page</h1>
      <div className="grid">
            {gif}
      </div>
    </>
  )
}