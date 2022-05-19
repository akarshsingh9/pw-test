export default function Tags({text}){
    const tagClass = `text-lg font-semibold inline-block py-1 px-2 rounded text-orange-600 bg-orange-200 last:mr-0 mr-1`
    return (
    <span className={tagClass}>
        {text}
    </span>
    )
}