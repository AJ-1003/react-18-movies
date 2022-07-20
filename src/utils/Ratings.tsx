import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import authenticationContext from "../auth/authenticationContext";
import "./ratings.css";

export default function Ratings(props: ratingsProps) {

    const [maximumValueArr, setMaximumValueArr] = useState<number[]>([]);
    const [selectedValue, setSelectedValue] = useState(props.selectedValue);
    const { claims } = useContext(authenticationContext);

    useEffect(() => {
        setMaximumValueArr(Array(props.maximumValue).fill(0));
    }, [props.maximumValue]);

    function handleMouseOver(rate: number) {
        setSelectedValue(rate);
    }

    function handleOnClick(rate: number) {
        const userIsLoggedIn = claims.length > 0;
        if (!userIsLoggedIn) {
            Swal.fire({
                title: "Error",
                text: "You need to login",
                icon: "error"
            });
            return;
        }

        setSelectedValue(rate);
        props.onChange(rate);
    }

    return (
        <>
            {maximumValueArr.map((_, index) =>
                <FontAwesomeIcon
                    icon="star"
                    key={index}
                    className={`fa-lg pointer ${selectedValue >= index + 1 ? 'checked' : null}`}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onClick={() => handleOnClick(index + 1)}
                />)}
        </>
    )
}

interface ratingsProps {
    maximumValue: number;
    selectedValue: number;
    onChange(rate: number): void;
}