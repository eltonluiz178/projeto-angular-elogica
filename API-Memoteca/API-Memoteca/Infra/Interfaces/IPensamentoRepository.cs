using API_Memoteca.Domain;

namespace API_Memoteca.Infra.Interfaces;

public interface IPensamentoRepository
{
    Task<RetornoPensamentoPaginado<Pensamento>> BuscarPensamentoPaginado(int pagina, int quantidade);
    Task<List<Pensamento>> BuscarTodosPensamentos();
    Task<Pensamento> BuscarPensamentoPorId(int id);
    Task<bool> AdicionarPensamento(Pensamento pensamento);
    Task<bool> EditarPensamento(Pensamento pensamento);
    Task<bool> ExcluirPensamento(int id);
}                                                                                                    
