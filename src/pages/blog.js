import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <Layout>
      <div>
        <h1>This is our blog page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In inventore
          laboriosam iusto ea officiis vero quae officia, nisi quaerat ad eos
          consequatur sed dicta placeat, aperiam nemo sit consequuntur! Cum, sed
          sint eveniet facere maxime at dolore alias ex possimus, illo quod vero
          veniam quo rerum voluptates odio corporis maiores. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quod placeat a magni tenetur
          non minus? Recusandae, voluptatum quia iste cumque aut numquam
          dignissimos est tempora praesentium aperiam doloremque eveniet eum
          debitis laudantium eaque corrupti. Maxime eos facilis aperiam, sequi,
          reprehenderit vel illum at nesciunt facere iusto alias distinctio!
          Cumque, quidem ad. Tenetur aut quas placeat vero nam, eius velit ut
          mollitia totam animi nobis, ducimus distinctio aliquid? Debitis maxime
          itaque, voluptate suscip eveniet pariatur eius.
        </p>

        <Link to="/"> Home</Link>
      </div>
    </Layout>
  )
}

export default blog
