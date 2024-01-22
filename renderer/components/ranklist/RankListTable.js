'use client';
import React from 'react';
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    getKeyValue,
} from '@nextui-org/react';
import { users } from './data';

export default function RankListTable() {
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;

    const pages = Math.ceil(users.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users.slice(start, end);
    }, [page, users]);

    return (
        <Table
            isStriped
            isHeaderSticky
            aria-label="Ranklist"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
            classNames={{
                wrapper: 'min-h-[222px]',
            }}
        >
            <TableHeader>
                <TableColumn align="center" key="rank">
                    RANK
                </TableColumn>
                <TableColumn align="center" key="team">
                    TEAM
                </TableColumn>
                <TableColumn align="center" key="penalty">
                    PENALTY
                </TableColumn>
                <TableColumn align="center" key="a">
                    A
                </TableColumn>
                <TableColumn align="center" key="b">
                    B
                </TableColumn>
                <TableColumn align="center" key="c">
                    C
                </TableColumn>
                <TableColumn align="center" key="d">
                    D
                </TableColumn>
                <TableColumn align="center" key="e">
                    E
                </TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.rank}>
                        {(columnKey) => (
                            <TableCell>
                                {getKeyValue(item, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
