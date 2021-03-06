import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "./Button";
import customConfirm from "./CustomConfirm";
import GenericList from "./GenericList";
import Pagination from "./Pagination";
import RecordsPerPageSelect from "./RecordsPerPageSelect";

export default function IndexEntity<T>(props: indexEntityProps<T>) {

    const [entities, setEntities] = useState<T[]>();
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadData();
    }, [page, recordsPerPage])

    function loadData(): void {
        axios.get(props.url, {
            params: { page, recordsPerPage }
        })
            .then((response: AxiosResponse<T[]>) => {
                const totalNumberOfRecords = parseInt(response.headers['totalamountofrecords'], 10);
                setTotalNumberOfPages(Math.ceil(totalNumberOfRecords / recordsPerPage));
                setEntities(response.data);
            })
    }

    async function deleteEntity(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`);
            loadData();
        }
        catch (error) {
            if (error && error.response) {
                console.log(error.response.data);
            }
        }
    }

    const buttons = (editUrl: string, id: number) =>
        <>
            <Link
                className="btn btn-success"
                to={editUrl}>Edit</Link>
            <Button
                className="btn btn-danger"
                onClick={() => customConfirm(() =>
                    deleteEntity(id))}>Delete</Button>
        </>

    return (
        <>
            <h3>{props.title}</h3>
            <p>This will display all records listed in the DB</p>
            {props.createUrl ?
                <Link className="btn btn-primary" to={props.createUrl}>
                    Create {props.entityName}
                </Link> : null}

            <RecordsPerPageSelect onChange={amountOfRecords => {
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }} />

            <Pagination
                currentPage={page}
                totalNumberOfPages={totalNumberOfPages}
                onChange={newPage => setPage(newPage)} />

            <GenericList list={entities}>
                <table className="table table-striped">
                    {props.children(entities!, buttons)}
                </table>
            </GenericList>
        </>
    )
}

interface indexEntityProps<T> {
    url: string;
    createUrl?: string;
    entityName?: string;
    title: string;
    children(entities: T[], buttons: (editUrl: string, id: number) => ReactElement): ReactElement;
}