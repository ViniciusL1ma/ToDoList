using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjetoToDoList.Migrations
{
    /// <inheritdoc />
    public partial class AjusteObservacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Observção",
                table: "DBT",
                newName: "Observacao");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Observacao",
                table: "DBT",
                newName: "Observacao");
        }
    }
}
