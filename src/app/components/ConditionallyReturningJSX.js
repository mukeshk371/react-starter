import Card from "./Card";
import CardWithProps from "./CardWithProps";

function Item({ isPacked }) {
    return (
        <li className="item">
            {isPacked ? (
                <Card />
            ) : (
                <CardWithProps
                    name="Dr. Vikram Sarabhai"
                    imgSrc="https://cdn.britannica.com/98/239498-050-C61D39D6/Vikram-Sarabhai-Indian-physicist-and-industrialist.jpg"
                    imgAlt="Vikram Sarabhai"
                    details_1="Indian physicist and astronomer"
                    details_2="father of the Indian Space programme"
                    details_3="Who initiated space research and helped to develop nuclear power in India"
                />
            )}
        </li>
    );
}

export default function ConditionallyReturningList() {
    return (
        <section>
            <h1 className="font-extrabold text-[30px] p-[20px] pb-0">isPacked=false</h1>
            <Item isPacked={false} />
            <h1 className="font-extrabold text-[30px] p-[20px] pb-0">isPacked=true</h1>
            <Item isPacked={true} />
        </section>
    );
}
