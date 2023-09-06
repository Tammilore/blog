import clsx from 'clsx'
const CATEGORIES = ['All', 'Featured', 'Product', 'About']

function Tag({ title, onClick, isSelected }) {
  return (
    <div
      className={clsx(
        'cursor-pointer rounded-md border px-3 py-px text-xs hover:bg-zinc-50 dark:text-zinc-100 dark:hover:bg-transparent',
        isSelected ? 'border-zingPurple text-zingPurple dark:border-zingPurple/50 dark:text-zingPurple/90' : 'border-zinc-200 dark:border-zinc-700 dark:hover:border-zinc-500'      
      )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export function CategoryTags({ setCategory, selectedCategory }) {
  return (
    <div className="mt-8 flex gap-2">
      {CATEGORIES.map((category) => (
        <Tag
          title={category}
          key={category}
          isSelected={selectedCategory === category}
          onClick={() => setCategory(category)}
        />
      ))}
    </div>
  )
}