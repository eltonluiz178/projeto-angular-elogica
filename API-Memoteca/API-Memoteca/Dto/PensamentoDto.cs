using System.ComponentModel.DataAnnotations;

namespace API_Memoteca.Dto;

public class PensamentoDto
{
    [Required(ErrorMessage = "Digite o texto do pensamento!")]
    [StringLength(300, ErrorMessage = "O texto não pode possuir mais de 300 caracteres")]
    public string Pensamento { get; set; }
    [Required(ErrorMessage = "Digite o nome do autor!")]
    [StringLength(50, ErrorMessage = "O nome do autor não pode possuir mais de 50 caracteres")]
    public string Autor { get; set; }
    [Required(ErrorMessage = "Selecione o modelo desejado!")]
    [Range(0, 3, ErrorMessage = "Modelo inválido!")]
    public int Modelo { get; set; }
}
