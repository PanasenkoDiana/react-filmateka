import { IMovie } from "../../../../interfaces";
import './Description.css'
import { useMovieById } from "../../../../hooks/useMovieById";
import { useParams } from "react-router-dom";



export function Description(){
    const params = useParams();

    const { movie } = useMovieById(Number(params.id))

    return(
        <>
        <div className="Description">
            <div className="Description1Part">
                <div className="Circle"></div>
                <p>{movie?.title}</p>
            </div>
            <div className="Description2Part">
                <div className="Circle"></div>
                <p className="Jenre MainText ">
                    {movie?.genres.map((genre) => genre.name).join(', ')}
                </p>

            </div>
            <div className="Description2Part">
                <div className="Circle"></div>
                <p>{movie?.runtime}</p>
            </div>
            <p className="Description3Part">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur necessitatibus repudiandae, praesentium maxime sint repellendus libero illum dicta suscipit vitae! Pariatur, aperiam iure doloribus placeat, laboriosam, quae inventore perferendis ipsa similique consectetur blanditiis. Excepturi nesciunt fugiat reiciendis nemo! Iure sint voluptatibus fugiat non. Repellendus tenetur aut voluptatum deleniti voluptatibus ut rerum aliquid repellat minus ex! Molestias quod dolor nobis sequi mollitia, eos ex dolores perspiciatis voluptates unde ducimus veritatis, excepturi numquam dignissimos modi optio cupiditate tempora corrupti voluptas quibusdam? Eius accusantium esse veniam iure molestiae vero et pariatur maxime asperiores error nobis libero ex quia facilis temporibus adipisci tempora illum voluptate magnam, in porro? Sed, cum dolorum quaerat atque debitis impedit sapiente iusto deserunt provident rerum blanditiis temporibus repudiandae maxime! Accusantium sunt non fuga tempore ut illum dolorem, veritatis iusto dolore obcaecati harum mollitia ea nisi reiciendis alias maxime doloribus? Reprehenderit praesentium non enim, earum inventore doloremque aperiam natus explicabo, neque velit minima quo libero. Cumque odio aperiam, doloremque dolor, similique qui id consequuntur esse possimus nobis voluptatum molestias ea sit perferendis repellendus aspernatur veritatis, totam ipsum ad. Ab quia ipsa sunt beatae, vel recusandae accusamus neque officiis repudiandae esse facere blanditiis, veniam accusantium! Facilis natus, tempore temporibus sequi ipsam minus necessitatibus sit, illo praesentium vitae nam impedit hic, ipsum provident quibusdam repellendus eveniet blanditiis? Quia dolorum assumenda praesentium distinctio exercitationem! Nisi, sed? Nobis iste, minus rem cumque molestiae laudantium a commodi illo nulla doloremque quasi harum accusantium necessitatibus perspiciatis incidunt consequuntur quas soluta expedita! Debitis odio voluptate accusamus beatae at aliquid ullam asperiores deleniti iure, et quos, dolorem ipsam suscipit odit, quia ipsum omnis obcaecati ab amet ex magni. Mollitia provident nostrum aut voluptatem tempore, perferendis harum atque consectetur non quae dolorem voluptas voluptatibus, corrupti est totam earum delectus! Quae quidem impedit consequuntur ipsa aspernatur error. Mollitia, ab.
            </p>
        </div>
        </>
    )
}