using API_Memoteca.Domain;

namespace API_Memoteca.Service.Interface;

public interface IPensamentoService
{
    Task<RetornoPensamentoPaginado<Pensamento>> BuscarPensamentoPaginadoASync(int pagina, int quantidade);
    Task<List<Pensamento>> BuscarTodosPensamentosASync();
    Task<Pensamento> BuscarPensamentoPorIdASync(int id);
    Task<bool> AdicionarPensamentoASync(Pensamento pensamento);
    Task<bool> EditarPensamentoASync(Pensamento pensamento);
    Task<bool> ExcluirPensamentoASync(int id);
}
