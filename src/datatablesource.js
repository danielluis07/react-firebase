export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "1",
    headerName: "Usuário",
    width: 230,
  },
  {
    field: "img",
    headerName: "Imagem",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "3",
    headerName: "Email",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
