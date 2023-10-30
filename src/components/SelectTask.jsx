import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';

export default function SelectTask({onSelect}){

    const pressReleaseStructure = 
    `Headline: Summarize the newsworthy element of the announcement in 10-15 words. Include any prominent names (individuals or organizations) that would be attractive to someone looking at the release.

    Subhead: In 10-15 words, expand upon the headline with additional details. This could include figures that explain the impact of the news, who the announcement will impact, what it means for a certain group of people or region.

    AP Style Dateline: PHOENIX (Date)

    Intro: One or two sentences that formally introduces the newsworthy elements of the announcements. This could include major figures or entities involved to show the impact (jobs created, grant amount received, square feet of a project, CapEx, investment amount, etc.)

    Background: 2-3 sentence paragraphs that incorporate research and commentary to emphasize why the announcement is important, tell an audience how it will affect a community and the lasting impacts it may have. This could also include more specific details like partners involved, history or an explanation of those partners, logistics of the announcement, a timeline of an event, etc.

    Quote: a quote from a leader within an economic development organization. This should tie the announcement back to how it fits into the growth of Greater Phoenix, and can also include the specific impact it will have on communities or the infrastructure of the region. Include a forward-looking sentiment here.

    Partner Quote: A quote from the organization/entity partnering with the economic development organization. This should speak on behalf of the company, and briefly explain why they are choosing to invest in the region, or why the region is important to their work. The quote should be two sentences long.`

    const options = [
        { value: "this", label: "blog post" }, 
        { value: "that", label: "event recap" }, 
        { value: pressReleaseStructure, label: "press release" }]


    function handleSelectChange(selectedOption) {
        onSelect(selectedOption.value)
    }

    return (
        <div className='w-56'>
            <Select 
                options={options} 
                className='text-left' 
                placeholder="select..."
                onChange={handleSelectChange} />
        </div>
        
    )
}