import "./win98.css";

export default function Window95({ children, title, style }: {children?: React.ReactNode, title?: String, style?: React.CSSProperties}) {
    return (
        <div className="win98-window" style={style}>
            <div className="title no-after"><p>{title}</p></div>
            {children}
        </div>);
}
