using System.Data;
using API_Memoteca.Domain;
using API_Memoteca.Infra.Interfaces;
using Dapper;

namespace API_Memoteca.Infra.Repositories;

public class PensamentoRepository : IPensamentoRepository
{
    private readonly IDbConnection _connection;

    public PensamentoRepository(IDbConnection connection)
    {
        _connection = connection;
    }

    public async Task<bool> AdicionarPensamento(Pensamento pensamento)
    {
        try
        {
            string sql = "INSERT INTO Pensamento VALUES (@NOMEPENSAMENTO,@AUTOR,@MODELO)";
            var parametros = new
            {
                NOMEPENSAMENTO = pensamento.PensamentoNome,
                AUTOR = pensamento.Autor,
                MODELO = pensamento.Modelo
            };
            var resultadoInsercao = await _connection.ExecuteAsync(sql, parametros);
            return resultadoInsercao > 0 ? true : false;
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<RetornoPensamentoPaginado<Pensamento>> BuscarPensamentoPaginado(int pagina, int quantidade)
    {
        try
        {
            string sql = @"SELECT * FROM Pensamento
            ORDER BY Id
            OFFSET @OFFSET ROWS FETCH NEXT @FETCHNEXT ROWS ONLY";
            var parametros = new
            {
                OFFSET = pagina,
                FETCHNEXT = quantidade
            };
            var pensamentos = await _connection.QueryAsync<Pensamento>(sql, parametros);
            string sqlContagem = "SELECT COUNT(*) FROM Pensamento";
            var quantidadeTotalPensamentos = await _connection.QueryFirstOrDefaultAsync<int>(sqlContagem);
            return new RetornoPensamentoPaginado<Pensamento>
            {
                Pagina = pagina,
                QtdPagina = quantidade,
                TotalRegistros = quantidadeTotalPensamentos,
                Pensamentos = pensamentos.ToList(),
            };
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<Pensamento> BuscarPensamentoPorId(int id)
    {
        try
        {
            string sql = $"SELECT TOP 1 * FROM Pensamento WHERE Id = {id}";
            var pensamento = await _connection.QueryFirstOrDefaultAsync<Pensamento>(sql);
            return pensamento;
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<List<Pensamento>> BuscarTodosPensamentos()
    {
        try
        {
            string sql = "SELECT * FROM Pensamento";
            var pensamento = await _connection.QueryAsync<Pensamento>(sql);
            return pensamento.ToList();
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<bool> EditarPensamento(Pensamento pensamento)
    {
        try
        {
            string sql = "UPDATE Pensamento SET Pensamento=@PENSAMENTO,Autor=@AUTOR,Modelo=@MODELO WHERE Id=@ID";
            var parametros = new
            {
                PENSAMENTO = pensamento.PensamentoNome,
                AUTOR = pensamento.Autor,
                MODELO = pensamento.Modelo,
                ID = pensamento.Id
            };
            var resultadoEdicao = await _connection.ExecuteAsync(sql, parametros);
            return resultadoEdicao > 0 ? true : false;
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<bool> ExcluirPensamento(int id)
    {
        try
        {
            string sql = $"DELETE * FROM Pensamento WHERE Id={id}";
            var resultadoDelecao = await _connection.ExecuteAsync(sql);
            return resultadoDelecao > 0 ? true : false;
        }
        catch (Exception e)
        { throw e; }
    }
}
