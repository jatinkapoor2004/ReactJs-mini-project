import React from 'react'

function Card({username = "Random Name" , post = "Not Assigned"}) {
  return (
    <div>   
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://picsum.photos/700/600" alt="" width="384" height="512"/>
        <div class="pt-6 space-y-4">
            <blockquote>
            <p class="text-lg font-medium">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis totam nobis, eius accusamus quam odio enim. Enim est facere in sint. Mollitia illo explicabo numquam officiis omnis repellendus assumenda amet!
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">


                {/* {props.username || "Jatin Kapoor"}   this is not good approach instead give default in parameter itself */}
                {username}

            </div>
            <div class="text-slate-700 dark:text-slate-500">
                {post}, Algolia
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card     