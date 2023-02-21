const Movies = ({ movies }) => {
    
    return (<table>
        <thead>
            <tr>
                <th>Title (year)</th>
                <th>Director(s)</th>
                <th>Length</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>{
            movies.map(({title, year, director, length, country}) => {

                return <tr key={`${title}${year}`}>
                    <td>{title} ({year})</td>
                    <td>{director}</td>
                    <td>{length}</td>
                    <td>{country}</td>
                </tr>
            })
            
            }</tbody>
    </table>);
}

export default Movies;