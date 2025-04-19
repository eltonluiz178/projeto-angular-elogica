namespace API_Memoteca.Domain;

public class RetornoPensamentoPaginado<Pensamento>
{
    public int TotalRegistros { get; set; }
    public List<Pensamento> Pensamentos { get; set; }
}
