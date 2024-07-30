import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 20px ${(props) => props.theme.inputShadow};
`

const TableHeader = styled.th`
  background-color: ${(props) => props.theme.tableHeader};
  color: ${(props) => props.theme.text};
  font-weight: bold;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid ${(props) => props.theme.border};
  position: sticky;
  top: 0;
  z-index: 10;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) => props.theme.surface};
  }

  &:hover {
    background-color: ${(props) => props.theme.tableRowHover};
  }
`

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    max-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: 100px;
  }
`

const HeaderRow = styled.tr`
  background-color: ${(props) => props.theme.tableHeader};
`

function OrderTable({ orders }) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <HeaderRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Event Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Item</TableHeader>
            <TableHeader>Customer</TableHeader>
            <TableHeader>Destination</TableHeader>
          </HeaderRow>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <TableRow key={order.id || index}>
              <TableCell>{order.id || 'N/A'}</TableCell>
              <TableCell>{order.event_name || 'N/A'}</TableCell>
              <TableCell>
                {order.price ? `$${(order.price / 100).toFixed(2)}` : 'N/A'}
              </TableCell>
              <TableCell>{order.item || 'N/A'}</TableCell>
              <TableCell>{order.customer || 'N/A'}</TableCell>
              <TableCell>{order.destination || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default React.memo(OrderTable)
