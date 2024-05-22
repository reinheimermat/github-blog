export function Post() {
  return (
    <div className="max-h-64 rounded-xl bg-basePost p-8">
      <div className="mb-5 flex items-start justify-between">
        <h1 className="text-xl font-bold text-baseTitle">
          Javascript data types and data structures
        </h1>
        <span className="text-nowrap text-sm text-baseSpan">Há 1 dia</span>
      </div>
      <p className="max-h-28 overflow-hidden text-ellipsis">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </div>
  )
}
