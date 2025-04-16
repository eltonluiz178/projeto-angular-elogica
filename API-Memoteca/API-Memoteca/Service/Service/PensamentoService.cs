using API_Memoteca.Domain;
using API_Memoteca.Infra.Interfaces;
using API_Memoteca.Service.Interface;

namespace API_Memoteca.Service.Service;

public class PensamentoService : IPensamentoService
{
    private readonly IPensamentoRepository _repository;

    public PensamentoService(IPensamentoRepository repository)
    {
        _repository = repository;
    }

    public async Task<bool> AdicionarPensamentoASync(Pensamento pensamento)
    {
        try
        {
            var resposta = await _repository.AdicionarPensamento(pensamento);
            if (resposta == null || resposta == false)
            {
                throw new Exception("Não foi possível adicionar o pensamento.");
            }
            else
            {
                return resposta;
            }
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<RetornoPensamentoPaginado<Pensamento>> BuscarPensamentoPaginadoASync(int pagina, int quantidade)
    {
        try
        {
            var pensamentos = await _repository.BuscarPensamentoPaginado(pagina, quantidade);
            if(pensamentos == null)
            {
                throw new Exception("Não foi possível localizar nenhum pensamento.");
            }
            else
            {
                return pensamentos;
            }
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<Pensamento> BuscarPensamentoPorIdASync(int id)
    {
        try
        {
            var pensamento = await _repository.BuscarPensamentoPorId(id);
            if(pensamento == null)
            {
                throw new Exception("Pensamento não foi encontrado");
            }
            else
            {
                return pensamento;
            }
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<List<Pensamento>> BuscarTodosPensamentosASync()
    {
        try
        {
            var pensamentos = await _repository.BuscarTodosPensamentos();
            if(pensamentos == null)
            {
                throw new Exception("Não foi possível localizar nenhum pensamento.");
            }
            else
            {
                return pensamentos;
            }
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<bool> EditarPensamentoASync(Pensamento pensamento)
    {
        try
        {
            var resposta = await _repository.EditarPensamento(pensamento);
            if(resposta == null || resposta == false)
            {
                throw new Exception("Não foi possível editar o pensamento.");
            }
            else
            {
                return resposta;
            }
        }
        catch (Exception e)
        { throw e; }
    }

    public async Task<bool> ExcluirPensamentoASync(int id)
    {
        try
        {
            var resposta = await _repository.ExcluirPensamento(id);
            if (resposta == null || resposta == false)
            {
                throw new Exception("Não foi possível localizar o pensamento.");
            }
            else
            {
                return resposta;
            }
        }
        catch (Exception e)
        { throw e; }
    }
}
