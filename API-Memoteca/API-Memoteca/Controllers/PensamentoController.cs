using System.Linq.Expressions;
using API_Memoteca.Domain;
using API_Memoteca.Dto;
using API_Memoteca.Service.Interface;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API_Memoteca.Controllers;

[Route("Pensamentos")]
[ApiController]
public class PensamentoController : ControllerBase
{
    private readonly IPensamentoService _service;
    private readonly IMapper _mapper;

    public PensamentoController(IPensamentoService service, IMapper mapper)
    {
        _service = service;
        _mapper = mapper;
    }

    /// <summary>
    /// Retorna todos os pensamentos paginados
    /// </summary>
    /// <param name="pagina"></param>
    /// <param name="quantidade"></param>
    /// <returns></returns>
    [HttpGet("{pagina}/{quantidade}")]
    public async Task<IActionResult> BuscarPensamentoPorPagina(int pagina, int quantidade)
    {
        try
        {
            var colaboradores = await _service.BuscarPensamentoPaginadoASync(pagina, quantidade);
            return StatusCode(200, colaboradores);
        }
        catch (Exception e)
        {
            return StatusCode(404, e.Message);
        }
    }

    [HttpGet("")]
    public async Task<IActionResult> BuscarTodosPensamentos()
    {
        try
        {
            var pensamentos = await _service.BuscarTodosPensamentosASync();
            return StatusCode(200, pensamentos);
        }
        catch (Exception e) 
        { 
            return StatusCode(404, e.Message);
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> BuscarPorId( int id)
    {
        try
        {
            var pensamento = await _service.BuscarPensamentoPorIdASync(id);
            return StatusCode(200, pensamento);
        }
        catch (Exception e) 
        { 
            return StatusCode(404, e.Message);
        }
    }

    [HttpPost("")]
    public async Task<IActionResult> AdicionarPensamento([FromBody] PensamentoDto pensamentoDto)
    {
        try
        {
            Pensamento pensamento = _mapper.Map<Pensamento>(pensamentoDto);
            var respostaInsercao = await _service.AdicionarPensamentoASync(pensamento);
            return Created("/Pensamentos", new { messagem = "Pensamento foi criado com sucesso!" });
        }
        catch (Exception e)
        {
            return StatusCode(400, e.Message);
        }
    }

    [HttpPut("")]
    public async Task<IActionResult> EditarPensamento([FromQuery] int id, [FromBody] PensamentoDto pensamentoDto)
    {
        try
        {
            var pensamentoProcurado = await _service.BuscarPensamentoPorIdASync(id);
            var pensamento = _mapper.Map<Pensamento>(pensamentoProcurado);
            pensamento.Id = id;
            var resultadoAtualizacao = await _service.EditarPensamentoASync(pensamento);
            return StatusCode(204, "O pensamento foi atualizado com sucesso.");
        }
        catch (Exception e)
        {
            return StatusCode(400, e.Message);
        }
    }

    [HttpDelete("")]
    public async Task<IActionResult> ExcluirPensamento([FromQuery] int id)
    {
        try
        {
            var resultadoDelecao = await _service.ExcluirPensamentoASync(id);
            if (resultadoDelecao)
            {
                return StatusCode(200, "Pensamento removido com sucesso!");
            }
            return StatusCode(400, "Não foi possível excluir o pensamento.");
        }
        catch (Exception e)
        {
            return StatusCode(404, e.Message);
        }
   }
}
