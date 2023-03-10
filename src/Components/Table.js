import "../Css/Table.css"

const tools =[{
    Icon:
        <svg fill="#3FCA0E" xmlns="http://www.w3.org/2000/svg" width="30" height="22"  viewBox="0 0 16 16">
        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
        </svg>
    },
    {
    Icon:
        <svg fill="#FFC700" xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        </svg>
    },
    {
    Icon:
        <svg fill="#120ED3"xmlns="http://www.w3.org/2000/svg" width="30" height="30"   viewBox="0 0 16 16">
        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"/>
        </svg>
    },
    {
    Icon:
        <svg fill="#E10808"xmlns="http://www.w3.org/2000/svg" width="30" height="22"  viewBox="0 0 16 16">
        <path  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
        </svg>
    }
]

const Table = ({data, column}) => {
    return (
        <table>
            <thead className="TableHead">
                <tr>{column.map((item, index)=>(<TableHeadItem item={item}/>) )}</tr>
            </thead>
            <tbody>
                <tr>
                    <td>0001</td>
                    <td>Gabriel Tapia</td>
                    <td>Podium</td>
                    <td>Podium</td>
                    {/* <td>{tools.Icon}</td> */}

                </tr>
                <tr>
                    <td>0001</td>
                    <td>Gabriel Tapia</td>
                    <td>Podium</td>
                    <td>Podium</td>
                    {/* <td>{tools.Icon}</td> */}

                </tr>
                <tr>
                    <td>0001</td>
                    <td>Gabriel Tapia</td>
                    <td>Podium</td>
                    <td>Podium</td>
                    {/* <td>{tools.Icon}</td> */}

                </tr>
                <tr>
                    <td>0001</td>
                    <td>Gabriel Tapia</td>
                    <td>Podium</td>
                    <td>Podium</td>
                    {/* <td>{tools.Icon}</td> */}

                </tr>
            </tbody>
        </table>

    );
}

const TableHeadItem = ({item}) => <th>{item.heading}</th>

export {Table};
