using API_Memoteca.Domain;
using API_Memoteca.Dto;
using AutoMapper;

namespace API_Memoteca.Profiles;
    
public class PensamentoProfile : Profile
{
    public PensamentoProfile()
    {
        CreateMap<Pensamento, PensamentoDto>().ReverseMap();
    }
}
