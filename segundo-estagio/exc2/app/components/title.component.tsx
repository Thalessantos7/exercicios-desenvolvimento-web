export function Title(props: any) {
    console.log(props)

    return (
        <div>
            <h1 className="text-l font-bold">{props.main ?? "Título Padrão"}</h1>
            <h2 className="text-sm text-gray-500">{props.subtitle ?? "Subtítulo Padrão"}</h2>
        </div>
    )
}