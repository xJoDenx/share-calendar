json.array!(@events) do |event|
  json.extract! event, :id, :title, :description
  # event.schedules.each do |sch|
  #   json.start sch.start_time
  #   json.end sch.end_time
  # end
  json.url event_url(event, format: :html)

end
json.array!(@schedules) do |sch|
  json.start sch.start_time
  json.end sch.end_time
end
